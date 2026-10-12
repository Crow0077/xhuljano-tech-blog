import unittest
from datetime import datetime, timedelta, timezone
from unittest.mock import patch
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from update_news import canonical, entries, when, collect

NOW = datetime(2026, 10, 12, 5, tzinfo=timezone.utc)

class NewsTests(unittest.TestCase):
    def test_rss_filters_stale_future_and_mcp(self):
        xml = b'''<rss><channel>
        <item><title>Current model release</title><link>https://example.org/release?utm_source=rss</link><pubDate>Sun, 11 Oct 2026 18:00:00 GMT</pubDate></item>
        <item><title>MCP adapter release</title><link>https://example.org/adapter</link><pubDate>Sun, 11 Oct 2026 18:00:00 GMT</pubDate></item>
        <item><title>Too old</title><link>https://example.org/old</link><pubDate>Thu, 01 Oct 2026 18:00:00 GMT</pubDate></item>
        <item><title>Future</title><link>https://example.org/future</link><pubDate>Tue, 13 Oct 2026 18:00:00 GMT</pubDate></item>
        </channel></rss>'''
        rows = entries(xml, 'Test', NOW, timedelta(hours=96))
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]['url'], 'https://example.org/release')

    def test_atom_picks_alternate_link(self):
        xml = b'''<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>AI release</title>
        <updated>2026-10-11T10:00:00Z</updated><link rel="self" href="https://example.org/atom"/>
        <link rel="alternate" href="https://example.org/article"/></entry></feed>'''
        rows = entries(xml, 'Atom', NOW, timedelta(hours=96))
        self.assertEqual(rows[0]['url'], 'https://example.org/article')

    def test_no_undated_or_unsafe_link(self):
        xml = b'''<rss><channel><item><title>Bad</title><link>javascript:alert(1)</link><pubDate>Sun, 11 Oct 2026 18:00:00 GMT</pubDate></item>
        <item><title>No date</title><link>https://example.org/article</link></item></channel></rss>'''
        self.assertEqual(entries(xml, 'Test', NOW, timedelta(hours=96)), [])
        self.assertIsNone(canonical('http://example.org'))
        self.assertIsNone(when(''))

    def test_fails_closed_without_three_sources(self):
        with patch('update_news.SOURCES', [('A','https://bad.invalid/'),('B','https://bad.invalid/')]), patch('update_news.urlopen', side_effect=OSError('offline')):
            with self.assertRaisesRegex(RuntimeError, 'refusing to publish'):
                collect(NOW)

if __name__ == '__main__':
    unittest.main()
