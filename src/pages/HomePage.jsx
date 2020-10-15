import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { GithubContext } from '../context/github/githubContext'

export const HomePage = () => {
  const { loading, users } = useContext(GithubContext)

  console.log('home page users:', typeof users)

  return (
    <>
      <Search />
      {loading ? (
        <p className="text-center">Загрузка</p>
      ) : (
        <div className="row">
          {users.map((user, index) => (
            <div className="col-sm-4 mb-4" key={index}>
              <Card user={user} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
