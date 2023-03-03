import React from "react";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

enum PointEstimate {
  EIGHT,
  FOUR,
  ONE,
  TWO,
  ZERO,
}

enum Status {
  BACKLOG,
  CANCELLED,
  DONE,
  IN_PROGRESS,
  TODO,
}

enum TaskTag {
  ANDROID,
  IOS,
  NODE_JS,
  RAILS,
  REACT,
}

interface Task {
  createdAt: Date;
  dueDate: Date;
  id: number;
  name: string;
  position: number;
  pointEstimate: PointEstimate;
  status: Status;
  tags: TaskTag[];
}
interface TasksQueryResponse {
  tasks: Task[];
}

const GET_TASKS = gql`
  query ($user: FilterTaskInput!) {
    tasks(input: $user) {
      createdAt
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;

const ContentMain = () => {
  const { data, loading, error } = useQuery<TasksQueryResponse>(GET_TASKS, {
    variables: { user: { status: "BACKLOG" } },
  });
  return (
    <div className="grid grid-cols-3 text-white">
      <div>
        {data?.tasks.map((task, index) => (
          <>{task.status}</>
        ))}
      </div>
      <div>
        <h2>Working(03)</h2>
        <div>
          {/*Card*/}
          <div>
            {/*Card Header*/}
            <div>
              <p>Slack</p>
            </div>
            {/*Card Body*/}
            <div></div>
            {/*Card Footer*/}
            <div></div>
          </div>

          <div>a2</div>
        </div>
      </div>
      <div>
        <h2>In Progress(03)</h2>
        <div>
          <div>b1</div>
          <div>b2</div>
        </div>
      </div>
      <div>
        <h2>Completed(03)</h2>
        <div>
          <div>c1</div>
          <div>c2</div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
