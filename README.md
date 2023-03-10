![banner](https://user-images.githubusercontent.com/76866137/221538427-c0b8389c-b005-426c-a1b4-619d3de3b4a7.png)

# Simple-Thumbnail


## 📌 Summary

<table>
    <tr>
        <th>기간</th>
        <td>2023.02.22 ~ 2023.02.27</td>
    </tr>
    <tr>
        <th>배포</th>
        <td><a href="https://simple-thumbnail.com">simple thumbnail</a></td>
    </tr>
    <tr>
        <th>디자인</th>
        <td><a href="https://www.figma.com/file/2fT3EcHIqzjbRBanGEX2Wi/%ED%85%8C%EC%98%A4%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-14%EA%B8%B0---5%EC%A1%B0?node-id=0%3A1&t=3BrDUU8ogWxoWpiV-0">figma</a></td>
    </tr>
    <tr>
        <th>회의록</th>
        <td><a href="https://pirateturtle.notion.site/14-5-7505931dad8e473097e215967aabc759">Team Notion</a></td>
    </tr>
</table>

<br/>

## 📌 Team

|**[자몽](https://github.com/se-chive)**|**[맥스](https://github.com/wogha95)**|**[수달](https://github.com/headring)**|**[운터](https://github.com/anveloper)**|**[원효](https://github.com/caseBread)** |**[체다](https://github.com/da-in)** |**[현](https://github.com/hey210056)** |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|<a href="https://github.com/se-chive"><img src="https://avatars.githubusercontent.com/u/102579969?v=4" width=90px alt="자몽의 사진" />|<a href="https://github.com/wogha95"><img src="https://avatars.githubusercontent.com/u/75886763?v=4" width=90px alt="맥스의 사진" />|<a href="https://github.com/headring"><img src="https://avatars.githubusercontent.com/u/48895268?v=4" width=90px alt="수달의 사진" />|<a href="https://github.com/anveloper"><img src="https://avatars.githubusercontent.com/u/90117593?v=4" width=90px alt="운터의 사진" />|<a href="https://github.com/caseBread"><img src="https://avatars.githubusercontent.com/u/92029332?v=4" width=90px alt="원효의 사진" />|<a href="https://github.com/da-in"><img src="https://avatars.githubusercontent.com/u/66757141?v=4" width=90px alt="체다의 사진" />|<a href="https://github.com/hey210056"><img src="https://avatars.githubusercontent.com/u/76866137?v=4" width=90px alt="현의 사진" />|
|Designer|FrontEnd|FrontEnd|FrontEnd|FrontEnd|FrontEnd|FrontEnd|

<br />

## 📌 Background

기존의 디자인툴은 다루기 어렵다는 문제가 있어, **빠르고 쉽게 썸네일을 제작** 하는 서비스가 필요했습니다.

**Target**

- **디자인을 어려워하고**, 역량이 부족한 사람
- 간단한 썸네일이 필요한 사람.

<br />

## 📌 Getting Start

```shell
git clone 'https://github.com/Yangjaecheon-Otter-Guardians/simple-thumbnail.git'
npm install
npm start
```

<br />

## 📌 Stack

- TypeScript
    - 타입의 안정성을 이용하고자 채택하였습니다.
- React
    - 선언적 프로그래밍 방식이며 SPA 구축하는데 용이하여 채택하였습니다.
- Tailwind CSS
    - 웹 페이지 로딩 속도를 향상 시키고 유지 보수가 쉬워 채택하였습니다.
- Recoil
    - Preview 설정 내용을 저장하기 위해 상태 관리 라이브러리를 채택하였습니다.
- Axios
    - HTTP 비동기 통신을 하기 위한 라이브러리입니다.
- eslint, prettier
    - 코드 정렬 및 효율적인 유지보수를 위해 채택하였습니다.
- downloadjs, html-to-image
    - 이미지를 다운 받기 위한 라이브러리입니다.
- react-color
    - 컬러 픽커 라이브러리입니다.
- react-toastify
    - 다양한 알림 메시지를 제공하는 라이브러리입니다.
- react-icons
    - 여러 아이콘을 제공하는 라이브러리입니다.
- react-helmet-async
    - HTML의 head 태그를 관리하기 위한 라이브러리입니다.

[package.json 바로가기](https://github.com/Yangjaecheon-Otter-Guardians/simple-thumbnail/blob/main/frontend/package.json)

<br />

## 📌 File Structure

```
📦frontend
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂assets  # 번들링 되어야하는 자산을 모아둔 폴더입니다.
 ┃ ┣ 📂atom  # recoil의 atom을 모아둔 폴더입니다.
 ┃ ┣ 📂components  # 대표 컴포넌트를 구성하는 컴포넌트가 모여있는 폴더입니다.
 ┃ ┃ ┣ 📂common  # 공통 컴포넌트를 모아둔 폴더입니다.
 ┃ ┃ ┣ 📂text  # 텍스트 레이아웃 및 아이템을 모아둔 폴더입니다.
 ┃ ┣ 📂constants  # 전역적으로 사용될 상수를 모아둔 폴더입니다.
 ┃ ┣ 📂features
 ┃ ┃ ┗ 📜App.tsx  # App 전체를 구성하는 컴포넌트입니다.
 ┃ ┣ 📂fonts  # 폰트 파일들이 모여있는 폴더입니다.
 ┃ ┣ 📂sections  # 화면을 구성하는 대표 컴포넌트가 모여있는 폴더입니다.
 ┃ ┣ 📂styles  # module로 작성한 css파일이 모여있는 폴더입니다.
 ┃ ┣ 📂utils  # 유틸성 함수를 위한 폴더입니다.
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┗ 📜tsconfig.json
```

<br />

## 📌 Demo

https://user-images.githubusercontent.com/76866137/221535397-a2de724e-2f54-488c-9a55-70f40ecbc601.mp4

<br />

## 📌 TODO

### 썸네일 배경

- 컨버스 사이즈를 변경하고 싶다.
  - [x] 드롭다운을 통해 `1:1`, `4:3`, `16:9` 비율로 변경하도록 했습니다.
- 배경을 변경하고 싶다.
  - [x] 색상 배경 : 팔레트에서 색상을 선택하거나, 그라데이션으로 변경하도록 구현했습니다.
  - [x] 이미지 배경 : Unsplash api를 이용하여 이미지를 랜덤하게 적용하였습니다. 과도한 api요청을 막기위해 디바운싱을 추가하였습니다.
  - [x] 직접 업로드 : 원하는 사진을 업로드하여 변경하도록 구현했습니다.

### 썸네일 텍스트

- 텍스트를 입력/수정하고 싶다.
  - [x] 입력창에 문구를 작성/수정하면 미리보기 화면에 반영되도록 구현하였습니다.
- 텍스트 레이아웃을 설정하고 싶다.
  - [x] 텍스트 갯수에 알맞은 텍스트 레이아웃을 Carousel로 보여줌으로서 선택하도록 하였습니다.
- 텍스트 폰트를 설정하고싶다.
  - [x] 모든 텍스트에 적용될 폰트를 드롭다운으로 선택하여 적용되도록 구현했습니다.
- 텍스트 강조(굵기)를 선택하고 싶다.
  - [x] 각 텍스트의 굵기를 `굵게`, `보통`, `얇게`의 버튼을 선택하도록 하였습니다.
- 폰트 색상을 선택하고싶다.
  - [x] 각 텍스트에 적용될 색상을 `팔레트`, `ColorPicker`를 통해 변경되도록 구현했습니다.

### 기타

- 썸네일을 저장하고 싶다.
  - [x] 미리보기에 나온 화면을 `downloadjs`와 `html-to-image` 라이브러리를 이용하여 자동저장하도록 구현했습니다. 저장하는 작업이 길어질 경우 사용자 경험을 위해 로딩처리를 추가했습니다.
- 작업 내용을 초기화하고싶다.
  - [x] 각 설정된 모든 recoil값을 기본값으로 돌려놓아 초기화하도록 구현했습니다.

### 서비스

- Github Pages 배포. + 커스텀 도메인 연결 (+ main branch의 CI/CD 파이프라인 구축)
  - [x] Github Pages workflow를 작성하여 CI/CD를 구축하였습니다.
  - [x] Github Pages로 배포된 주소를 Github Custom Domain을 설정하였습니다.
- 반응형 웹 적용
  - [x] `Mobile`, `Tablet`, `Desktop`으로 나눠 범위에 속하는 사이즈에 맞게 미디어쿼리를 적용했습니다.
- SEO 최적화
  - [x] meta태그, title, description 등을 이용하여 Open Graph, 구조화된 마크업으로 구현했습니다.
- Google Search Console에 페이지 등록
  - [x] 구글 검색 엔진에 웹사이트가 검색되도록 등록해주고, 구글 검색 결과가 어떻게 이뤄지고 있는지 모니터링 결과도 알기위해 등록했습니다.
- GA(구글 애널리틱스)
  - [x] 웹사이트로 유입되는 모든 방문자의 정보를 확인하고자 사용하였습니다.

<br />

## 📌 Sprint Retrospect

### Day 1

> **스프린트 목적**  
> 어떻게 하면 앞으로 협업을 더 잘 할 수 있을지 그 방법을 배우는 것

스프린트 회의는 다음과 같은 방법으로 진행 되었습니다.

1. 시간을 정하기
2. 각자의 이야기를 쓰기
3. 돌아가며 얘기하기
4. 적극적으로 리액션하기

그 중 **적극적인 리액션**을 통해 발표자를 편하게 하고, 새로운 생각과 말을 꺼내는데 큰 도움이 되었습니다.

새로운 사람들과 협업하기 위해 가장 먼저 진행 한 것은 **팀 캔버스 작성**이었습니다. 단계 별로 자신을 소개하며 가까워지는 과정으로 "내가 이 사람들 앞에서는 눈치를 보면서 말 할 필요가 없다"는 심리적 안전 장치를 마련할 수 있었습니다.

![테오의 스프린트 14기 5조 Team Canvas](https://i.imgur.com/WuIN5QA.png)

### Day 2

> **지도 그리기**  
> 서로의 아이디어를 **확장** 하고 **발산** 하고 **구체화** 하는 시간

좋은 협업의 시작은 서로의 **생각의 주파수**를 맞추는 것입니다. 서비스의 궁극적인 목적과 대상을 바탕으로 **워드 클라우드**를 만들었습니다. 일방적인 의견 주장이 아닌 **어떻게 하면 ~ 할 수 있을까**라는 질문과 **레퍼런스**를 이용하여 답변하는 것이 아이디어를 구체화하는데 많은 도움이 되는 것을 느꼈습니다.

![테오의 스프린트 14기 5조 지도 그리기](https://i.imgur.com/P4dgEQl.png)

### Day 3

> **스케치**

무엇이 맞는 방법인지 논의를 길게 이어가기 보다는 우선 각자의 스케치한 아이디어를 발표함으로써 모든 의견을 누락없이 공유하였습니다.

> **결정**

수평적인 팀워크를 만들기위해 무언가를 제일 잘하는 사람이 제일 잘할 수 있도록 해주는 것이 중요하며 이는 권위나 직급이 아니라 역할을 수행하는 것이라 생각하여 결정권자(PL)를 선정하였습니다.

이로써 결정권자를 통해 여러 의견을 하나로 좁혀나갈 수 있었습니다. 또한 결정과 책임이 분명하지 않으면 남에게 책임을 미루거나 누군가가 독단적으로 결정하는 문제가 발생하기 때문에 선정하였습니다.

> **설계**

**BDD(behavior driven development)**  
사용자의 행동을 중심으로 개발을 진행하는 방식

![테오의 스프린트 14기 5조 BDD 설계](https://i.imgur.com/DQPVSwj.jpg)
