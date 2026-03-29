import cls from "./Avatar.module.scss";

export default function Avatar({ src, size = 32 }) {
  return (
    <div className={cls.avatar} style={{ width: size, height: size }}>
      <img
        className={cls.avatar__img}
        src={
          src ||
          "https://images.unsplash.com/photo-1774246651781-d0cf98fb2fd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Avatar"
      />
    </div>
  );
}
