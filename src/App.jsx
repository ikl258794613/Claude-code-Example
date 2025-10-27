import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('登入資訊:', { username, password })
    // 這裡可以加入實際的登入邏輯
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>登入</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">帳號</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="請輸入帳號"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入密碼"
              required
            />
          </div>
          <button type="submit" className="login-button">
            登入
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
