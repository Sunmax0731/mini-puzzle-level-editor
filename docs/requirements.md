# 要件定義

- Repo: `mini-puzzle-level-editor`
- Domain: Game
- Rank: 42 / P2 / Score 58
- Idea No: 1
- アイデア名: 小型パズル・レベルエディタ
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 背景
倉庫番、ロジック、水流パズルを小さく作り、問題作成まで扱う。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 課題
単発パズルは作った後に問題追加や調整が続きにくい。

## closed alpha要件
- static web playable prototypeとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
