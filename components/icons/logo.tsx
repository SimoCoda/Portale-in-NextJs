import Image from "next/image"

const logo = () => {
  return (
    <div>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
    </div>
  )
}

export default logo
