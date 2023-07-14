# TravelMaker
TravelMaker - iSpan Final Project

## 如何開始
因 laravel 專案內有`.gitignore` 有些文件需要手動重建, 依序執行以下步驟

### Step 1. Clone project 
```bash
git clone https://github.com/HappyPeppaTeam/TravelMaker.git
```

### Step 2. Rebuild package
重建被`.gitignore`忽略的package 
```bash
cd Backend
composer install
```

### Step 3. Generate Environment keys
重建 `.env` 檔
> .env.example 檔案更名為 .env

重建環境keys
```bash
php artisan key:generate
``` 
### Step 4. Check execution
點擊以下連結
http://localhost/TravelMaker/Backend/public/


## Git 操作指南

如何更新 branch 到最新進度

情境: Eric 剛剛 push 了最新進度到 branch `development` , Jeff 現在想要更新自己的 branch `Jeff_so_handsome` 到最新進度
### Step 0. Check local branch
確認是否有追蹤 `development` branch (local branch 中是否有 `development`) 

```bash
git branch
```

```
* Jeff_so_handsome
  development
  main
```

如果沒有 `development`, 複製與追蹤 `development` 分支
```bash
git checkout -b development origin/development
```

輸入方式如下
```bash
git checkout -b <new-local-branch-name> origin/<remote-branch-name>
```


### Step 1. Get lastest change
```bash
git checkout development
```

`pull` 最新進度
```bash
git pull
```

### Step 2. Update branch
```bash
git checkout Jeff_so_handsome
```
更新 `development` 進度到現在分支 `Jeff_so_handsome` 
```bash
git merge development
```
