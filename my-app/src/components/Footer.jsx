const Footer = () => {
    return (
        <>
            <div className="dark:bg-black bg-white dark:text-white py-4 ">
                <div className="container mx-auto max-w-7/10 px-4 flex justify-between items-center">
                    <h1 className="text-lg font-bold">poinsenDecks</h1>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><h4 className="font-bold">made with</h4></td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://tailwindcss.com/">Tailwind</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://react.dev/">React</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://fontawesome.com/">Font Awesome</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};

export { Footer };