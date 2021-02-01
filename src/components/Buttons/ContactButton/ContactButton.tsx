type Props = {
  children: React.SVGProps<SVGSVGElement>;
};

const ContactButton = ({ children }: Props): JSX.Element => {
  return <button className="contact-btn">{children}</button>;
};
export default ContactButton;
