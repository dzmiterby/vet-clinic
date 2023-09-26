import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import TopicCard from "../widgets/Forum/TopicCard/TopicCard";

describe("TopicCard", () => {
  const topic = {
    id: 1,
    title: "Рыбные сухарики",
    content: "Философские размышления и вечные споры.",
    creationDate:new Date(),
    lastUpdateDate: new Date(),
    topicStarter: {
      id: 1,
      email: "client1@email.com",
      firstname: "MeowMeow",
      lastname: "Cat",
    },
    commentDtoList: [],
  };

  it("TopicCard renders", () => {
    render(<TopicCard {...topic} />);
    expect(screen.getByTestId("topic")).toBeInTheDocument();
  });
});
