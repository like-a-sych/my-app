import style from "./AdminButton.module.scss";

export default function AdminButton() {
  return (
    <div className={style["admin-panel"]}>
      <a href="#" className={style["admin-panel__ring"]}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4864 4.49998C10.4864 3.49998 9.82001 2.49999 8.99454 2.49999H7.00546C6.17999 2.49999 5.51365 3.49998 5.51365 4.49998V6.58996C5.51605 7.32372 5.3578 8.04902 5.05014 8.71438C4.74248 9.37974 4.29293 9.96887 3.73342 10.4399C3.65144 10.5119 3.58985 10.6044 3.55492 10.708C3.51998 10.8116 3.51294 10.9227 3.53451 11.0299C3.56612 11.1648 3.64243 11.2848 3.75089 11.3702C3.85934 11.4556 3.99348 11.5014 4.13124 11.4999H11.8688C12.0065 11.5014 12.1407 11.4556 12.2491 11.3702C12.3576 11.2848 12.4339 11.1648 12.4655 11.0299C12.4871 10.9227 12.48 10.8116 12.4451 10.708C12.4101 10.6044 12.3486 10.5119 12.2666 10.4399C11.7071 9.96887 11.2575 9.37974 10.9499 8.71438C10.6422 8.04902 10.4839 7.32372 10.4864 6.58996V4.49998ZM7.00546 1H8.99454C9.84974 1.07151 10.6425 1.47898 11.201 2.13411C11.7594 2.78924 12.0387 3.63926 11.9782 4.49998V6.58996C11.9861 7.0526 12.0943 7.50793 12.2953 7.92417C12.4962 8.34042 12.7851 8.70755 13.1418 8.99995C13.463 9.2829 13.7074 9.64341 13.8518 10.0475C13.9962 10.4517 14.0359 10.8861 13.9672 11.3099C13.9111 11.8396 13.6632 12.33 13.2707 12.6877C12.8783 13.0454 12.3686 13.2456 11.8389 13.2499H9.97435C9.95406 13.4118 9.91412 13.5709 9.85513 13.7237C9.75875 13.9733 9.6135 14.2009 9.428 14.393C9.24249 14.5851 9.02051 14.7378 8.77521 14.8421C8.52991 14.9463 8.26629 15 7.99998 14.9998C7.49674 15.0061 7.00985 14.8203 6.63746 14.4799C6.42921 14.2834 6.26546 14.0442 6.15735 13.7785C6.08834 13.6089 6.04303 13.431 6.0223 13.2499H4.1014C3.58207 13.2312 3.08692 13.0246 2.70689 12.6682C2.32687 12.3118 2.0875 11.8295 2.03276 11.3099C1.96407 10.8861 2.0038 10.4517 2.14822 10.0475C2.29263 9.64341 2.53697 9.2829 2.85822 8.99995C3.21488 8.70755 3.50377 8.34042 3.70475 7.92417C3.90572 7.50793 4.01394 7.0526 4.02184 6.58996V4.49998C3.96133 3.63926 4.24057 2.78924 4.79905 2.13411C5.35752 1.47898 6.15026 1.07151 7.00546 1ZM7.05445 13.2499C7.10256 13.3982 7.18497 13.5346 7.29673 13.647C7.48325 13.8345 7.73621 13.9399 7.99998 13.9399C8.26375 13.9399 8.51671 13.8345 8.70323 13.647C8.81498 13.5346 8.8974 13.3982 8.94551 13.2499H7.05445Z"
            fill="#414348"
          />
        </svg>
      </a>
      <a href="mailto:test@test.ru" className={style["admin-panel__email"]}>
        Admin e-mail
      </a>
    </div>
  );
}
