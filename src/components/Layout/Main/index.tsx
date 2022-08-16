import style from './main.module.scss'

const TailwindCSS = 'place-items-center'

const Main = ({ children }: any) => (
  <>
    <main className={`${style.main} ${TailwindCSS}`}>{children}</main>
  </>
)

export default Main
