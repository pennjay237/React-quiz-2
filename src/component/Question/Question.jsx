import styles from "./Question.module.css";
import { PropTypes } from "prop-types";
import he from "he";

export default function Question({
	next,
	question,
	number,
	totalQuestion,
	time,
}) {
	function escapeHtml(word) {
		return word ? he.decode(word) : "";
	}

	if (!question) return <div className={styles.box}>Loading question...</div>;

	return (
		<div className={styles.box}>
			<div className={`${styles.cardBox} ${styles.questionBox}`}>
				<div className={styles.row}>
					<h3>
						Question <span>{number}/{totalQuestion}</span>
					</h3>
					<h3> Time left: {time} </h3>
				</div>

				<div className={styles.row}>
					<div className={styles.col6}>
						<h4>
							Category : <span>{question?.category}</span>
						</h4>
					</div>
					<div className={styles.col6}>
						<h4>
							Difficulty : <span>{question?.difficulty}</span>
						</h4>
					</div>
				</div>

				<div className={styles.row}>
					<h3 className={styles.questionText}>
						{escapeHtml(question?.question)}
					</h3>
				</div>

				<div className={styles.tfButtons}>
					<div className={styles.col6}>
						<button
							onClick={() => next(question, "True")}
							className={`${styles.bouton} ${styles.btnSuccess}`}
						>
							True
						</button>
					</div>
					<div className={styles.col6}>
						<button
							onClick={() => next(question, "False")}
							className={`${styles.bouton} ${styles.btnDanger}`}
						>
							False
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Question.propTypes = {
	next: PropTypes.func.isRequired,
	question: PropTypes.object,
	number: PropTypes.number,
	totalQuestion: PropTypes.number,
	time: PropTypes.number,
};
