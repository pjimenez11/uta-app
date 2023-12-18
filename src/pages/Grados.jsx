import { CartFacultades } from "../components/cartFacultades";
import { dataFacultades } from "../data/dataFacultades";
export const Grados = () => {
    return (

        <div>
            <div className="relative h-[400px]">
                <img
                    src="https://www.cesurformacion.com/uploads/media/21-9-large/09/2509-estudiar-o-trabajar.jpg?v=1-0"
                    alt="Grados"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-white dark:bg-opacity-0 bg-opacity-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center">
                    <div className="flex justify-center items-center">
                        <div className="text-white w-2/4">
                            <div className="flex gap-x-2">
                                <div className="w-2 bg-japanese-maple-600"></div>
                                <div className="">
                                    <span className="sm:text-5xl text-3xl font-bold">
                                        Grados
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-8 my-4">
                {dataFacultades.map((item) => (
                    <CartFacultades key={item.name} item={item} />
                ))}
            </ul>
        </div>
    );
};