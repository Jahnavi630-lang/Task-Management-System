function Progress() {
  return (
    <div
      style={{
        textAlign:"center",
        marginTop:"50px"
      }}
    >
      <h1>
        Project Progress
      </h1>

      <h3>
        Task Tracker
      </h3>

      <progress
        value="70"
        max="100"
      >
      </progress>

      <p>
        70% Completed
      </p>
    </div>
  );
}

export default Progress;