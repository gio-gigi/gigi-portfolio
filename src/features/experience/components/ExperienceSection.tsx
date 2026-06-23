import { CoursesList } from "./CoursesList";
import {ExperiencePath} from "./ExperiencePath";

export function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
            <ExperiencePath />
            <CoursesList />
        </section>
    );
}