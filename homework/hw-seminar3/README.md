# [ LEVEL 1 ] 블로그
## BASE URL : http://52.78.218.215
## **[GET] ~/blogs**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Response - body
##### SUCCESS
```
{
    "status": "블로그 조회 성공",
    "success": true,
    "message": [
        {
            "blogIdx": 1,
            "blogName": "경선의 블로그 ~",
            "userIdx": "24"
        }
    ]
}
```

---
## **[GET] ~/blogs/{blogIdx}**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Response - body
##### SUCCESS
```
{
    "status": "블로그 조회 성공",
    "success": true,
    "message": [
        {
            "blogIdx": 1,
            "blogName": "경선의 블로그 ~",
            "userIdx": "24"
        }
    ]
}
```

---

## **[POST] ~/blogs/**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogName|String   |게시물 제목|

```
{
	"blogName" : "나의 블로그",
	"owner" : "24"
}
```

### Response - body
##### SUCCESS
```
{
    "status": "블로그 작성 성공",
    "success": true
}
```


---
## **[PUT] ~/blogs/{blogIdx}**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogName|String  |바꿀 블로그 이름|

```
{
	"blogName" : "나의 블로그!@#!@#!@"
}
```

### Response - body
##### SUCCESS
```
{
    "status": "블로그 수정 성공",
    "success": true
}
```

---

## **[DELETE] ~/blogs/{blogIdx}**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Response - body
##### SUCCESS
```
{
    "status": "블로그 삭제 성공",
    "success": true
}
```

---


# [ LEVEL 2 ] 블로그 - 게시글
## **[GET] ~/blogs/articles**
모든 블로그의 게시글 확인
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Response - body
##### SUCCESS
```
{
    "status": "게시글 전체 조회 성공",
    "success": true,
    "message": [
        {
            "articleIdx": 4,
            "userIdx": 24,
            "title": "이거 테스트!!",
            "content": "과연 잘 들어갈까",
            "created": "2019-11-18 02:17:21",
            "liked": 0,
            "blogIdx": 1
        },
        {
            "articleIdx": 15,
            "userIdx": 24,
            "title": "수정 테스트",
            "content": "이건 몇 번째 테스트를 수정하는 테스트입니다",
            "created": "2019-11-18 03:14:53",
            "liked": 0,
            "blogIdx": 2
        }
    ]
}
```

---
## **[GET] ~/blogs/articles/:articlesIdx**
특정 게시글 확인
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|multipart/form-data|
|jwt|user jwt|

### Response - body
##### SUCCESS
```
{
    "status": "게시글 조회 성공",
    "success": true,
    "message": {
        "articleIdx": 36,
        "userIdx": 1,
        "title": "이미지 테스트ㅡ ~~~",
        "content": "되줘라 제발 ㅜ",
        "created": "2019-11-19 03:01:09",
        "liked": 0,
        "blogIdx": 2,
        "articleImgIdx": 1,
        "image": [
            "https://with-sopt-25.s3.ap-northeast-2.amazonaws.com/1574100069615.JPG",
            "https://with-sopt-25.s3.ap-northeast-2.amazonaws.com/1574100069625.JPEG"
        ]
    }
}
```

---

## **[POST] ~/blogs/{blogIdx}/articles**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|multipart/form-data|
|jwt|user jwt|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|title|String   |게시글의 제목|
|content|String   |게시글의 내용|
|images|files|게시글의 이미지|

images 는 최대 4개의 사진까지 받습니다.

```
{
	"userIdx" : "24",
	"title" : "무슨 글을 써야할까",
    "content": "테스틏ㅍ!!!!테스틏ㅍ!!!!테스틏ㅍ!!!!테스틏ㅍ!!!!",
    "images": files...
}
```

### Response - body
##### SUCCESS
```
{
    "status": "게시글 작성 성공",
    "success": true
}
```


---
## **[PUT] ~/blogs/{blogIdx}/articles**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|multipart/form-data|
|jwt|user jwt|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|title|String   |게시글의 제목|
|content|String   |게시글의 내용|
|images|files|게시글의 이미지|

images 는 최대 4개의 사진까지 받습니다.
블로그 내에 존재하는 게시글의 Idx에 접근해야만 합니다.
```
{
	"title" : "무슨 글을 써야할까",
    "content": "테스트 변경!!!!!테스트 변경!!!!!",
    "images": files...
}
```

### Response - body
##### SUCCESS
```
{
    "status": "게시글 수정 성공",
    "success": true
}
```

---

## **[DELETE] ~/blogs/{blogIdx}/articles**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|
|jwt|user jwt|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|articleIdx|Int   |삭제할 게시글의 Idx|

블로그 내에 존재하는 게시글의 Idx에 접근해야만 합니다.
```
{
	"articleIdx" : "23"
}
```

### Response - body
##### SUCCESS
```
{
    "status": "게시글 삭제 성공",
    "success": true
}
```
