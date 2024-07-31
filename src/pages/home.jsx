import Header from "../components/header";
import Avatar from "../components/avatar";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <Avatar
          src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/83340370_3001190123340131_3066298988186616612_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=V7X40q3E6MIQ7kNvgFNHBoN&_nc_ht=scontent-sjc3-1.xx&gid=AWeKCkZDDnmivUfs6JIOQrf&oh=00_AYDPTyDaZ_VhunnqjoPDRhDrrRu8H01c159_Qhb42-Q95A&oe=66D1E505"
          alt="User Avatar"
          size="w-24 h-24"
          border="ring ring-primary ring-offset-base-100 ring-offset-2"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
