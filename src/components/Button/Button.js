import './Button.scss'

export const Button = ({name, theme, handleClick}) => {
  return (
      <button className={theme} onClick={handleClick}>
          {name}
      </button>
  )
}
