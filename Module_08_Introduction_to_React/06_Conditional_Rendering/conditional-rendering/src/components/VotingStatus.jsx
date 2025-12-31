function VotingStatus({ age }) {
  return (
    <div>
      {age >= 18 && <p>You are eligible to vote</p>}
      {age < 18 && <p>You are not eligible to vote</p>}
    </div>
  );
}

export default VotingStatus;
