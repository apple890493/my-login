const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

function matchUser(userInfo) {
  // const user = users.find(user => user.email === userInfo.email && user.password === userInfo.password)
  // return user
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === userInfo.email && users[i].password === userInfo.password) {
      return users[i].firstName
    }
  }
  return false
}

module.exports = matchUser