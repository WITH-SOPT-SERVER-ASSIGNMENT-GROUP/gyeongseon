# 블로그
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

