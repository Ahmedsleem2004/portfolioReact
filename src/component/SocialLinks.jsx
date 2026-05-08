import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ahmed-sliem-b954593b5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-red-500 transition hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Ahmedsleem2004"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-red-500 transition hover:scale-110"
      >
        <FaGithub />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/ahmed.sleem.7568/about/?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100009867332832&sk=about"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-red-500 transition hover:scale-110"
      >
        <FaFacebook />
      </a>

    </div>
  );
}