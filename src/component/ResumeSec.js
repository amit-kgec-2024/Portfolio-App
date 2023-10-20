import React from 'react'
import ResumeEducation from './ResumeEducation';
import ResumePerProj from "./ResumePerProj"

const dataA = [
  {
    id: 0,
    time: "2021 - 2024",
    university: "B.Tech Degree - M.A.K.A.U.T University",
    colleg: "Kalyani Government Engineering College",
    place: "kalyani, Nadia, 741235 (W. B.)",
    depertment: "Electronics & Communication Engineering",
  },
  {
    id: 1,
    time: "2018 - 2021",
    university: "Diploma Degree - W.B.S.C.T.V.E.S.D Board",
    colleg: "Mirmadan Mohanlal Government Polytechnic",
    place: "Plassey, Nadia, 741156 (W. B.)",
    depertment: "Electrical & Electronics Engineering",
  },
  {
    id: 2,
    time: "2017",
    university: "Higher Secondary Education - W.B.C.H.S.E Board",
    colleg: "Nazirpur Vidyapith (H. S.)",
    place: "KalyNazirpur, Nadia, 741165ani",
    depertment: "Arts",
  },
  {
    id: 3,
    time: "2015",
    university: "Secondary Education - W.B.B.S.E Board",
    colleg: "Betai High School (M. P.)",
    place: "Betai, Nadia, 741163",
    depertment: "ECE",
  },
];


function ResumeSec() {
  return (
    <main className="w-[80%] left-[20%] relative">
      <div className="container p-8">
        <div className="p-6 bg-emerald-50">
          <h2 className="text-3xl font-semibold">
            <span className="text-accent">Re</span>sume
          </h2>
          <div className="border-2 w-14 mt-4 border-sky-400" />
          <p className="text-gray-500 text-xl mt-6">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div className="flex p-4 gap-6">
            <div>
              <h2 className="text-4xl font-bold">
                Edu<span className="text-accent">cation</span>
              </h2>
              <div className="border-1 rounded-full w-6 h-6 bg-indigo-300" />
              {dataA.map((el) => (
                <ResumeEducation
                  key={el.id}
                  time={el.time}
                  university={el.university}
                  colleg={el.colleg}
                  place={el.place}
                  depertment={el.depertment}
                />
              ))}
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                Per<span className="text-accent">sonal</span> Projects
              </h2>
              <div className="border-1 rounded-full w-6 h-6 bg-indigo-300" />
              {dataB.map((el) => (
                <ResumePerProj
                  key={el.id}
                  time={el.time}
                  title={el.title}
                  details={el.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResumeSec


const dataB = [
  {
    id: 0,
    time: "2023",
    title: "Web Developement",
    details:
      "Visit my about section where i used some Fontent like A N A S - Tutorial, Learn to code with Apple, Le Catering and Student Library",
  },
  {
    id: 1,
    time: "2023",
    title: "Web Developement",
    details:
      "Visit my about section where i used some Fontent like A N A S - Tutorial, Learn to code with Apple, Le Catering and Student Library",
  },
  {
    id: 2,
    time: "2023",
    title: "Medical Image Processing",
    details:
      "Medical image processing is a field of study that focuses on the application of image processing techniques to medical images. Medical images can include medical images such as X-rays, CT scans, and MRI scans, as well as microscopic images of cells and tissues.",
  },
  {
    id: 3,
    title: "Making Electric Bicycle Smart",
    details:
      "The project thus aims to reintroduce the bicycle with more user friendly and low cost features. An attempt will be made to model a similar design for the simple bicycles.",
  },
];