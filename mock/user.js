import Mock from 'mockjs'

// 拦截登录请求
Mock.mock('/api/login', 'post', (options) => {
  // 解析请求参数
  const { username, password } = JSON.parse(options.body)

  // 判断用户名和密码是否正确
  if (username === 'admin' && password === '123456') {
    // 登录成功，返回模拟的用户信息
    return Mock.mock({
      code: 200,
      message: '登录成功',
      data: {
        username: 'admin',
        token: 'mock-token',
      },
    })
  } else {
    // 登录失败，返回错误信息
    return Mock.mock({
      code: 401,
      message: '用户名或密码错误',
    })
  }
})
