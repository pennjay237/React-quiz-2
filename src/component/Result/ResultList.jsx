/** @format */

import PropTypes from "prop-types";
import he from "he";
import styles from "./ResultList.module.css";

export default function ResultList({ tabResponse, score, star }) {
	function escapeHtml(word) {
		return he.decode(word);
	}

	return (
		<div className={styles.container}>
			<div className={styles.cardList}>
				<div className={styles.cardHeader}>
					<h3>Score: {score} / 10</h3>
					{score > 5 ? (
						<h3>Congratulations, You Passed!</h3>
					) : (
						<h3>You Failed. Please Try Again.</h3>
					)}
				</div>
				<div className={styles.cardBody}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Quest</th>
								<th>Question Asked</th>
								<th>Correct Answer</th>
								<th>Your Answer</th>
							</tr>
						</thead>
						<tbody>
							{tabResponse.map((item, index) => (
								<tr key={index}>
									<th>{index + 1}</th>
									<td>{escapeHtml(item.question)}</td>
									<td>{item.correct_answer}</td>
									<td>{item.yours}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className={styles.restartBtnContainer}>
						<button onClick={star} className={styles.restartBtn}>
							Restart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

ResultList.propTypes = {
	tabResponse: PropTypes.array,
	score: PropTypes.number.isRequired,
	star: PropTypes.func,
};
