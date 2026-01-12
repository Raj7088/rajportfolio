export default function Book() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Book a Training / Call</h1>

      <iframe
        src="YOUR_CALENDLY_LINK"
        width="100%"
        height="650"
        className="mt-6 border rounded-xl"
      ></iframe>
    </div>
  );
}
