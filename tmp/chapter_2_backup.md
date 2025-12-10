# Chapter 2: ROS 2 Python Examples - Nodes, Topics, and Services

This chapter provides step-by-step examples for creating basic ROS 2 components in Python: Nodes, Publishers/Subscribers (Topics), and Service Clients/Servers. These examples will form the foundation for more complex robotic applications.

## Prerequisites

Before starting, ensure you have a ROS 2 environment set up (e.g., ROS 2 Humble). You should also have `colcon`, the ROS 2 build tool, and `rosdep` installed.

## 1. Creating a ROS 2 Workspace and Package

First, let's create a new ROS 2 workspace and a Python package within it.

1.  **Create a Workspace**:
    ```bash
    mkdir -p ~/ros2_ws/src
    cd ~/ros2_ws
    ```

2.  **Create a Python Package**:
    ```bash
    ros2 pkg create --build-type ament_python my_robot_pkg
    ```
    This command creates a new directory `my_robot_pkg` inside `~/ros2_ws/src`, with the necessary package structure for a Python ROS 2 package.

## 2. ROS 2 Node Example: The "Hello ROS 2" Node

A node is the fundamental unit of computation in ROS 2. Here, we'll create a simple node that prints "Hello ROS 2" periodically.

1.  **Create `my_robot_pkg/my_robot_pkg/simple_node.py`**:
    ```python
    import rclpy
from rclpy.node import Node

class SimpleNode(Node):

    def __init__(self):
        super().__init__('simple_node')
        self.get_logger().info('Hello ROS 2 from simple_node!')
        self.timer = self.create_timer(1.0, self.timer_callback)

    def timer_callback(self):
        self.get_logger().info('Executing timer callback...')

def main(args=None):
    rclpy.init(args=args)
    simple_node = SimpleNode()
    rclpy.spin(simple_node)
    simple_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
    ```

2.  **Update `my_robot_pkg/setup.py`**:
    Add the entry point for your executable. Locate the `entry_points` dictionary and add the following:
    ```python
    entry_points={
        'console_scripts': [
            'simple_node = my_robot_pkg.simple_node:main',
        ],
    },
    ```

3.  **Build the Package**:
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_pkg
    ```

4.  **Source the Workspace**:
    ```bash
    . install/setup.bash
    ```
    This command must be run in every new terminal you use for ROS 2.

5.  **Run the Node**:
    ```bash
    ros2 run my_robot_pkg simple_node
    ```
    You should see "Hello ROS 2 from simple_node!" and "Executing timer callback..." printed in your terminal every second.

## 3. ROS 2 Topic Example: Publisher and Subscriber

This example demonstrates how two nodes can communicate asynchronously using a ROS 2 topic.

### 3.1. Publisher Node

1.  **Create `my_robot_pkg/my_robot_pkg/simple_publisher.py`**:
    ```python
    import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class SimplePublisher(Node):

    def __init__(self):
        super().__init__('simple_publisher')
        self.publisher_ = self.create_publisher(String, 'chatter', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello ROS 2 from Python: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    simple_publisher = SimplePublisher()
    rclpy.spin(simple_publisher)
    simple_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
    ```

### 3.2. Subscriber Node

1.  **Create `my_robot_pkg/my_robot_pkg/simple_subscriber.py`**:
    ```python
    import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class SimpleSubscriber(Node):

    def __init__(self):
        super().__init__('simple_subscriber')
        self.subscription = self.create_subscription(
            String,
            'chatter',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    simple_subscriber = SimpleSubscriber()
    rclpy.spin(simple_subscriber)
    simple_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
    ```

### 3.3. Update `my_robot_pkg/setup.py`

Add entry points for both publisher and subscriber:
```python
    entry_points={
        'console_scripts': [
            'simple_node = my_robot_pkg.simple_node:main',
            'simple_publisher = my_robot_pkg.simple_publisher:main',
            'simple_subscriber = my_robot_pkg.simple_subscriber:main',
        ],
    },
```

### 3.4. Build and Run

1.  **Build the Package**:
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_pkg
    . install/setup.bash # Re-source if you opened a new terminal
    ```

2.  **Run Publisher (in one terminal)**:
    ```bash
    ros2 run my_robot_pkg simple_publisher
    ```

3.  **Run Subscriber (in a separate terminal)**:
    ```bash
    ros2 run my_robot_pkg simple_subscriber
    ```
    You should see the subscriber receiving messages from the publisher.

## 4. ROS 2 Service Example: Server and Client

This example demonstrates synchronous request/reply communication using ROS 2 services.

### 4.1. Create Custom Service Definition

First, we need to define a custom service.

1.  **Create `my_robot_pkg/srv/AddTwoInts.srv`**:
    ```
    int64 a
    int64 b
    ---
    int64 sum
    ```

2.  **Update `my_robot_pkg/package.xml`**:
    Add the following lines inside the `<package>` tags:
    ```xml
    <build_depend>rclpy</build_depend>
    <build_depend>rosidl_default_generators</build_depend>
    <exec_depend>rclpy</exec_depend>
    <exec_depend>rosidl_default_runtime</exec_depend>
    <member_of_group>rosidl_interface_packages</member_of_group>
    ```

3.  **Update `my_robot_pkg/setup.py`**:
    Import `generate_distutils_setup` and `find_packages`. Add the `data_files` entry and `packages` list, and modify `setup(**setup_args)`:

    ```text
    from setuptools import find_packages, setup
from setuptools.command.install import install
import os

package_name = 'my_robot_pkg'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/' + package_name, ['package.xml']),
        ('share/' + package_name + '/srv', ['srv/AddTwoInts.srv']),
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['launch/my_robot_pkg_launch.py']), # This will be added later for launch files
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='your_name',
    maintainer_email='your_email@example.com',
    description='TODO: Package description',
    license='TODO: License declaration',
    tests_require=['pytest'],
    entry_points=&#123;
        'console_scripts': [
            'simple_node = my_robot_pkg.simple_node:main',
            'simple_publisher = my_robot_pkg.simple_publisher:main',
            'simple_subscriber = my_robot_pkg.simple_subscriber:main',
            'add_ints_server = my_robot_pkg.add_two_ints_server:main',
            'add_ints_client = my_robot_pkg.add_two_ints_client:main',
        ],
    &#125;,
)
    ```

### 4.2. Service Server

1.  **Create `my_robot_pkg/my_robot_pkg/add_two_ints_server.py`**:
    ```python
    import rclpy
from rclpy.node import Node
from my_robot_pkg.srv import AddTwoInts # Import your custom service

class AddTwoIntsServer(Node):

    def __init__(self):
        super().__init__('add_two_ints_server')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)
        self.get_logger().info('Add Two Ints Service Server is ready.')

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Incoming request: a={request.a}, b={request.b}')
        self.get_logger().info(f'Sending back response: {response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    add_two_ints_server = AddTwoIntsServer()
    rclpy.spin(add_two_ints_server)
    add_two_ints_server.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
    ```

### 4.3. Service Client

1.  **Create `my_robot_pkg/my_robot_pkg/add_two_ints_client.py`**:
    ```python
    import rclpy
from rclpy.node import Node
from rclpy.task import Future
from my_robot_pkg.srv import AddTwoInts # Import your custom service
import sys

class AddTwoIntsClient(Node):

    def __init__(self):
        super().__init__('add_two_ints_client')
        self.client = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Service not available, waiting again...')
        self.request = AddTwoInts.Request()

    def send_request(self, a, b):
        self.request.a = a
        self.request.b = b
        self.future = self.client.call_async(self.request)

def main(args=None):
    rclpy.init(args=args)

    if len(sys.argv) != 3:
        print('Usage: ros2 run my_robot_pkg add_ints_client &lt;int_a&gt; &lt;int_b&gt;')
        rclpy.shutdown()
        sys.exit(1)

    add_two_ints_client = AddTwoIntsClient()
    add_two_ints_client.send_request(int(sys.argv[1]), int(sys.argv[2]))

    while rclpy.ok():
        rclpy.spin_once(add_two_ints_client)
        if add_two_ints_client.future.done():
            try:
                response = add_two_ints_client.future.result()
            except Exception as e:
                add_two_ints_client.get_logger().error(f'Service call failed: {e}')
            else:
                add_two_ints_client.get_logger().info(
                    f'Result of add_two_ints: for {add_two_ints_client.request.a} + {add_two_ints_client.request.b} = {response.sum}')
            break
    
    add_two_ints_client.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
    ```

### 4.4. Build and Run

1.  **Build the Package**:
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_pkg
    . install/setup.bash # Re-source if you opened a new terminal
    ```

2.  **Run Service Server (in one terminal)**:
    ```bash
    ros2 run my_robot_pkg add_ints_server
    ```

3.  **Run Service Client (in a separate terminal)**:
    ```bash
    ros2 run my_robot_pkg add_ints_client 5 3
    ```
    You should see the client sending a request to the server, and the server responding with the sum.

This book will explore these concepts in depth, providing practical examples and theoretical foundations for understanding and building intelligent humanoid robots.
