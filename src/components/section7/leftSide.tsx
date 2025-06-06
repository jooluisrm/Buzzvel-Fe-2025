import { LinkBlue } from "../reuse/linkBlue";

export const LeftSide = () => {
    return (
        <div className="container mx-auto py-[48px] px-[16px]">
            <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-bold lg:text-[56px] lg:font-extrabold">All the cool <span className="relative inline-block custom-marker">features</span>{' '}</h1>
                <p className="text-[16px] lg:text-[20px]">
                    Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla.
                    Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                </p>
                <LinkBlue text="View all the features" />
            </div>
        </div>
    );
}