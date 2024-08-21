import { Route, Routes } from "react-router-dom"

import UserCreate from "./pages/Users/Create"
import UserEdit from "./pages/Users/Edit"
import UserList from "./pages/Users/List"

// import NotFound from "./pages/NotFound"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/new" element={<UserCreate />} />
      <Route path="/users/:id" element={<UserEdit />} />
    </Routes>
  )
}
