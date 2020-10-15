import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
  const { show, hide } = useContext(AlertContext)
  const { searchUsers, clearUsers } = useContext(GithubContext)
  const [value, setValue] = useState('')

  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      if (value.trim()) {
        hide()
        searchUsers(value.trim())
      } else {
        show('Введите данные пользователя')
        clearUsers()
      }
    }
  }

  return (
    <div className="form-group">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя"
        onKeyPress={onSubmit}
      />
    </div>
  )
}
