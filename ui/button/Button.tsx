import styles from './buttonStyles.module.css'

export default function Button({
    kind = 'default',
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    kind?: 'default' | 'error';
  }) {
    return (
      <button
        className={styles.button}
        {...props}
      />
    );
  }