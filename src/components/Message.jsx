const Message = ({ text }) => {
    return (
        <div className="message w-full h-20">
            <p className="text-white p-3 text-3xl font-mono text-center">{text}</p>
        </div>
    )
}
export default Message;