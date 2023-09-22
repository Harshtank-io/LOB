import React from "react";
import styles from "./css/oop.module.css";
import Footer from "../components/Footer";

function OOP() {
  return (
    <>
    
      <div className={styles["oop-container"]}>
        <div className={styles["index-oop"]}>
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#encapsulation">Encapsulation</a>
            </li>
            <li>
              <a href="#inheritance">Inheritance</a>
            </li>
            <li>
              <a href="#polymorphism">Polymorphism</a>
            </li>
            <li>
              <a href="#abstraction">Abstraction</a>
            </li>
          </ul>
        </div>
        <div className={styles["oop"]}>
        <h1 className={styles["oop-h1"]}>OOP Concepts</h1>
          <section id="overview">
            <h2>What is OOP? </h2>
            <p>
              As the name suggests, Object-Oriented Programming or OOPs refers
              to languages that use objects in programming, they use objects as
              a primary source to implement what is to happen in the code.
              Objects are seen by the viewer or user, performing tasks assigned
              by you. Object-oriented programming aims to implement real-world
              entities like inheritance, hiding, polymorphism etc. in
              programming. The main aim of OOP is to bind together the data and
              the functions that operate on them so that no other part of the
              code can access this data except that function.
            </p>
          </section>

          <section id="encapsulation">
            <h2>Encapsulation</h2>
            <p>
              Encapsulation is one of the core principles of OOP, which involves
              bundling data (attributes) and methods (functions) that operate on
              the data into a single unit called a class.
            </p>
          </section>

          <section id="inheritance">
            <h2>Inheritance</h2>
            <p>
              Inheritance allows you to create a new class by inheriting
              properties and behaviors from an existing class. It promotes code
              reuse and the creation of a hierarchy of classes.
            </p>
          </section>

          <section id="polymorphism">
            <h2>Polymorphism</h2>
            <p>
              Polymorphism allows objects of different classes to be treated as
              objects of a common superclass. It enables you to write code that
              can work with objects in a more generic way.
            </p>
          </section>

          <section id="abstraction">
            <h2>Abstraction</h2>
            <p>
              Abstraction involves simplifying complex reality by modeling
              classes based on real-world entities and exposing only the
              necessary features while hiding implementation details.
            </p>
          </section>
          <Footer/> 
         
        </div>
      </div>
      
    </>
  );
}

export default OOP;
