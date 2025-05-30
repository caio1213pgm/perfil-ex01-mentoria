import Profile from "./Profile";
import image from "../assets/image.png";
import Button from "./Button";

function DivGroup() {
  return (
    <div className="mx-5">
      <div>
        <div className="bg-main rounded pb-6">
          <img src={image} alt="" className="rounded" />
          <Profile />
          <div className="flex justify-center gap-2 mt-1">
            <Button stack="React"/>
            <Button stack="Typescript"/>
            <Button stack="Tailwind"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DivGroup;
