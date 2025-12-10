# ADR-0003: Robotics Simulation and Middleware Stack

- **Status:** Accepted
- **Date:** 2025-12-05
- **Feature:** 001-ai-robotics-book
- **Context:** The book must teach students industry-standard tools for robotics development and simulation. The chosen stack needs to cover a wide range of topics, from basic physics simulation to advanced, GPU-accelerated AI perception and manipulation, while being well-integrated.

## Decision

- **Middleware:** ROS 2 Humble Hawksbill (LTS)
- **General-Purpose Simulator:** Gazebo Fortress
- **High-Fidelity AI Simulator:** NVIDIA Isaac Sim

## Consequences

### Positive
- This stack provides students with a comprehensive, industry-relevant toolchain.
- ROS 2 is the standard for robotics middleware.
- The combination of Gazebo for fundamentals and Isaac Sim for advanced AI provides a clear learning progression.
- NVIDIA Isaac Sim offers powerful GPU acceleration and pre-built pipelines for AI tasks, which is crucial for the VLA section of the book.

### Negative
- The learning curve for three distinct, complex pieces of software is steep.
- NVIDIA Isaac Sim has significant hardware requirements (an NVIDIA RTX GPU), which may be a barrier for some students.
- Managing compatibility between these different systems can be complex.

## Alternatives Considered

- **Alternative Stack A (Unity-only)**: Using Unity with its ROS 2 connectors could serve as an all-in-one solution. This was rejected because Isaac Sim provides more robotics-specific, high-fidelity features and AI integrations from NVIDIA, which are central to the book's advanced topics.
- **Alternative Stack B (Other Simulators)**: Webots or CoppeliaSim (formerly V-REP) are other popular simulators, but Gazebo's integration with ROS is generally considered more seamless and is more common in the research community.

## References

- Feature Spec: `specs/001-ai-robotics-book/spec.md`
- Implementation Plan: `specs/001-ai-robotics-book/plan.md`
- Related ADRs: `ADR-0001`, `ADR-0002`
- Evaluator Evidence: `specs/001-ai-robotics-book/research.md`