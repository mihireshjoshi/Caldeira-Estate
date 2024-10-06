import Grapes from "./Grapes";
import Olive from "./Olive";
import Wine from "./Wine";

export default function ProdDesk() {
    return (
        <section className="flex flex-col gap-12">
            <Wine />
            <Olive />
            <Grapes />
        </section>
    );
}