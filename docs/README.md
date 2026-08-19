# 작업용 자료

앱에는 실리지 않는 파일들입니다. 그림을 다시 만들 때 참고하세요.

| 파일 | 무엇 |
|---|---|
| `날씨-시안.jpg` | 날씨 화면을 어떻게 만들지 그려 본 그림 |
| `날씨-원본/` | 강아지 날씨 그림 원본. `icons/weather/` 의 것은 이걸 줄인 것입니다 |

## 날씨 그림을 추가하거나 바꾸려면

`icons/weather/` 에 넣고 크기를 줄입니다. 세로 260px 이면 충분합니다.

```
sips --resampleHeight 260 -s format jpeg -s formatOptions 72 새그림.jpg --out icons/weather/rain.jpg
```

바꾼 뒤에는 `sw.js` 의 `VERSION` 숫자를 올려야 폰에 반영됩니다.
새로운 종류를 더하려면 `index.html` 의 `wxPhoto()` 함수에 줄을 추가하세요.
