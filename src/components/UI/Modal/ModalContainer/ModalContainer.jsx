import style from "./ModalContainer.module.scss";

export default function ModalContainer({ closeModal, children }) {
	return (
		<div className={style.modal} onClick={closeModal}>
			<div
				className={style.modal__content}
				onClick={e => {
					e.stopPropagation();
				}}
			>
				<button
					type="button"
					onClick={closeModal}
					className={style.modal__close}
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_1_2679)">
							<path
								d="M6.84758 6.00008L11.0776 1.77008C11.181 1.65595 11.2366 1.50642 11.2328 1.35244C11.229 1.19847 11.1661 1.05186 11.0572 0.942948C10.9483 0.834041 10.8017 0.771185 10.6477 0.767394C10.4938 0.763603 10.3442 0.819167 10.2301 0.922583L6.00008 5.15258L1.77008 0.922583C1.65595 0.819167 1.50642 0.763603 1.35244 0.767394C1.19847 0.771185 1.05186 0.834041 0.942948 0.942948C0.834041 1.05186 0.771185 1.19847 0.767394 1.35244C0.763603 1.50642 0.819167 1.65595 0.922583 1.77008L5.15258 6.00008L0.922583 10.2301C0.819167 10.3442 0.763603 10.4938 0.767394 10.6477C0.771185 10.8017 0.834041 10.9483 0.942948 11.0572C1.05186 11.1661 1.19847 11.229 1.35244 11.2328C1.50642 11.2366 1.65595 11.181 1.77008 11.0776L6.00008 6.84758L10.2301 11.0776C10.3442 11.181 10.4938 11.2366 10.6477 11.2328C10.8017 11.229 10.9483 11.1661 11.0572 11.0572C11.1661 10.9483 11.229 10.8017 11.2328 10.6477C11.2366 10.4938 11.181 10.3442 11.0776 10.2301L6.84758 6.00008Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_2679">
								<rect width="12" height="12" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
				<div className={style.modal__body}>{children}</div>
			</div>
		</div>
	);
}
