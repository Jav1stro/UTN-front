export default function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (
          arg0: {
            id: number;
            name: string;
            size: string;
            color: string;
            price: string;
          }[]
        ): void;
        new (): any;
      };
    };
  }
) {
  res.status(200).json([
    {
      id: 1,
      name: "Cuaderno liso",
      size: "l",
      color: "red",
      price: "140",
    },
    {
      id: 2,
      name: "Cuaderno rayado",
      size: "m",
      color: "blue",
      price: "100",
    },
    {
      id: 3,
      name: "Agenda",
      size: "m",
      color: "amarillo",
      price: "150",
    },
    {
      id: 4,
      name: "Cuaderno de dibujo",
      size: "xl",
      color: "violet",
      price: "200",
    },
  ]);
}
