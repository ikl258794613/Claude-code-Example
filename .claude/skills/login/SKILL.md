---
name: login
description: 自動登入網站表單。讀取 pw.txt 檔案中的帳號密碼，使用 Chrome DevTools 填入登入表單並提交，最後讀取 console 訊息。當使用者要求「登入」、「自動登入」或「填寫登入表單」時使用此 skill。
allowed-tools:
  - mcp__filesystem__read_text_file
  - mcp__chrome-devtools__list_pages
  - mcp__chrome-devtools__select_page
  - mcp__chrome-devtools__take_snapshot
  - mcp__chrome-devtools__fill
  - mcp__chrome-devtools__fill_form
  - mcp__chrome-devtools__click
  - mcp__chrome-devtools__list_console_messages
  - mcp__chrome-devtools__get_console_message
  - TodoWrite
---

# Login Skill

這個 skill 會自動執行登入流程：
1. 從專案根目錄讀取 `pw.txt` 檔案獲取帳號密碼
2. 在 Chrome 瀏覽器中填入登入表單
3. 提交表單
4. 讀取並回報 console 訊息

## 執行步驟

### 步驟 1: 讀取帳號密碼

使用 `mcp__filesystem__read_text_file` 工具讀取專案根目錄下的 `pw.txt` 檔案：

```
path: /Users/lanhou/Desktop/Work/claude-app/pw.txt
```

解析檔案內容，格式為：
```
account:帳號
password:密碼
```

### 步驟 2: 準備 Chrome 頁面

1. 使用 `mcp__chrome-devtools__list_pages` 列出所有開啟的頁面
2. 如果需要選擇特定頁面，使用 `mcp__chrome-devtools__select_page` 
3. 使用 `mcp__chrome-devtools__take_snapshot` 取得當前頁面快照，找出登入表單的元素 uid

### 步驟 3: 填寫登入表單

根據快照中找到的表單元素：

1. 使用 `mcp__chrome-devtools__fill_form` 一次填寫多個欄位，或
2. 使用 `mcp__chrome-devtools__fill` 分別填寫帳號和密碼欄位

填寫時使用從 `pw.txt` 讀取的帳號密碼資料。

### 步驟 4: 提交表單

使用 `mcp__chrome-devtools__click` 點擊登入按鈕提交表單。

### 步驟 5: 讀取 Console 訊息

1. 使用 `mcp__chrome-devtools__list_console_messages` 列出所有 console 訊息
2. 使用 `mcp__chrome-devtools__get_console_message` 讀取特定訊息的詳細內容
3. 將重要的 console 訊息（特別是 error 和 log 類型）回報給使用者

## 輸出格式

完成後提供以下資訊：
- ✅ 成功讀取的帳號資訊
- ✅ 已填寫的表單欄位
- ✅ 表單提交狀態
- 📝 Console 訊息摘要（包含類型、訊息內容）

## 錯誤處理

- 如果 pw.txt 不存在或格式錯誤，回報錯誤並停止
- 如果找不到登入表單元素，回報快照內容讓使用者確認
- 如果有 console error 訊息，特別標註並回報
