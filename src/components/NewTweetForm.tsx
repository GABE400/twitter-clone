import { Button } from "./Button";

export function NewTweetForm() {
  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        {/*<ProfileImage src="#url" />*/}
        <textarea
          className="mt-10 flex-grow resize-none overflow-hidden rounded-lg p-4 text-lg text-gray-600 outline-none"
          placeholder="What is happening?!"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
