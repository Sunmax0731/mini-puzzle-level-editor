export const productProfile = {
  "repo": "mini-puzzle-level-editor",
  "title": "小型パズル・レベルエディタ",
  "domain": "Game",
  "version": "0.1.0-alpha.1",
  "rank": 42,
  "tier": "P2",
  "score": 58,
  "publicTarget": "GitHub Pages / BOOTH",
  "overview": "倉庫番、ロジック、水流パズルを小さく作り、問題作成まで扱う。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "単発パズルは作った後に問題追加や調整が続きにくい。",
  "differentiation": "レベルエディタを最初から同梱し、問題制作まで遊びにする。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/game",
    "src/content"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "GitHub Pages向け静的Webとして外部API、課金、ランキング送信、ユーザー投稿公開をclosed alphaでは扱わない。",
    "レベルや課題データはsamples配下に閉じ、素材は自作の軽量SVGだけを同梱する。",
    "BOOTH配布前に著作権、年齢表現、保存データの説明を確認する。"
  ]
};
