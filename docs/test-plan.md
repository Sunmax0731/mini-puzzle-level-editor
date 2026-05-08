# テスト計画

- Repo: `mini-puzzle-level-editor`
- Domain: Game
- Rank: 42 / P2 / Score 58
- Idea No: 1
- アイデア名: 小型パズル・レベルエディタ
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\Game\mini-puzzle-level-editor`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/mini-puzzle-level-editor-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
