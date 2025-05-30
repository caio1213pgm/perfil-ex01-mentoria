import profile from "../assets/IMG_7185.png";
function Profile() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[150px] rounded-full">
        <img
          src={profile}
          alt=""
          className="relative z-10 -mt-20 md:-mt-24 lg:-mt-28 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-main"
        />
      </div>
      <div className="text-center text-white w-[90%]">
        <h1 className="text-2xl font-medium">Caio Fabio</h1>
        <h3 className="text-xl text-txt1">Desenvolvedor Front-end</h3>
        <p className=" text-txt2">Cria interfaces bonitas, rápidas e intuitivas.</p>
      </div>
    </div>
  );
}
export default Profile;
