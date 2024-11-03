import GoalItem from "./GoalItem";

function GoalList() {
  return (
    <ul>
      <GoalItem title="First Goal">
        <p>Understanding React Components and JSX</p>
        <p>Components and Props</p>
      </GoalItem>
      <GoalItem title="Second Goal">
        <p>Working with Events and State</p>
        <p>Handling Side Effects</p>

        <p>Optimization and Opportunities</p>
        <p>Working with Complex State</p>
        <p>Building Custom React Hooks</p>
      </GoalItem>
      <GoalItem title="Third Goal">
        <p>Multipage Apps with React Router</p>
        <p>Managing Data with React Router</p>
      </GoalItem>
    </ul>
  );
}

export default GoalList;
