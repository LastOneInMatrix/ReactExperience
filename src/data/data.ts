export default function handler(req: any, res: any) {
    setTimeout(
        () =>
            res.status(200).json({
                randomNumber: Math.round(Math.random() * 10000),
                people: [
                    { name: "John Doe" },
                    { name: "Olive Yew" },
                    { name: "Allie Grater" },
                ],
            }),
        750
    );
}