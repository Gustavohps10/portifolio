export default async function Page() {
  const res = await fetch('https://api.github.com/users/Gustavohps10/repos', {
    next: { revalidate: 3600 },
  })
  const data = await res.json()

  console.log(data)

  return <></>
}
