# [ LEVEL 1 ] 블로그
## BASE URL : http://52.79.109.230
## **[GET] ~/blogs**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

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

## **[POST] ~/blogs**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogName|String   |게시물 제목|
|owner|Int   |게시물 주인의 Idx|

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
## **[PUT] ~/blogs**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogIdx|Int   |바꿀 블로그의 Idx|
|blogName|String  |바꿀 블로그 이름|

```
{
	"blogIdx" : "4",
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

## **[DELETE] ~/blogs**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogIdx|Int   |삭제할 블로그의 Idx|

```
{
	"blogIdx" : "4"
}
```

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
## **[GET] ~/blogs/{blogIdx}/articles**
특정 블로그의 게시글 확인
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

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
        }
    ]
}
```

---

## **[POST] ~/blogs/{blogIdx}/articles**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|multipart/form-data|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|userIdx|Int   |게시자의 Idx|
|title|String   |게시글의 제목|
|content|String   |게시글의 내용|
|images|files|게시글의 이미지|

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
|Content-Type|application/json|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|articleIdx|Int   |바꿀 게시글의 Idx|
|title|String   |게시글의 제목|
|content|String   |게시글의 내용|

블로그 내에 존재하는 게시글의 Idx에 접근해야만 합니다.
```
{
	"articleIdx" : "23",
	"title" : "무슨 글을 써야할까",
    "content": "테스트 변경!!!!!테스트 변경!!!!!"
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
