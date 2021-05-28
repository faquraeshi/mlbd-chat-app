import React, { memo } from "react";

const StaticScreen = () => {
  return (
    <>
      <div className="container wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="chat-main">
              <div className="chat-left">
                <div className="chat-left-header">
                  <div className="chat-left-avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
                  </div>

                  <div className="chat-left-name">
                    <h4>Mamun Khandaker</h4>
                    <div className="chat-status">
                      <span className="chat-status-dot chat-status-dot-busy"></span>
                      <span className="chat-status-text">
                        Busy
                        <img src={"./images/triangle.png"} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="chat-left-details">
                  <h4 className="chat-left-details-header">
                    <span className="chat-left-details-header-bullet">
                      <img src="./images/triangle.png" />
                    </span>
                    <span className="chat-left-details-header-text">
                      Direct Messages
                    </span>
                    <span className="chat-left-details-header-plus">
                      <img src="./images/plus.png" />
                    </span>
                  </h4>

                  <ul className="chat-name-list">
                    <li className="active online">
                      <a href="#">John Carrey</a>
                    </li>
                    <li className="new-message">
                      <a href="#">
                        Mr. A B M Ahad Uddin
                        <span className="message-count">5</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Mariah Doglus</a>
                    </li>
                    <li className="online">
                      <a href="#">Mickey Mouse</a>
                    </li>
                    <li className="new-message">
                      <a href="#">
                        Donald Trump
                        <span className="message-count">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Mat Hardy</a>
                    </li>
                  </ul>

                  <h4 className="chat-left-details-header chat-left-details-header-link">
                    <span className="chat-left-details-header-icon">
                      <img src="images/icon_message.png" />
                    </span>
                    <span className="chat-left-details-header-text">
                      Threads
                    </span>
                  </h4>
                  <h4 className="chat-left-details-header chat-left-details-header-link">
                    <span className="chat-left-details-header-icon">
                      <img src="images/icon_edit.png" />
                    </span>
                    <span className="chat-left-details-header-text">
                      Drafts
                    </span>
                  </h4>

                  <h4 className="chat-left-details-header">
                    <span className="chat-left-details-header-bullet">
                      <img src="images/triangle.png" />
                    </span>
                    <span className="chat-left-details-header-text">
                      Groups
                    </span>
                    <span className="chat-left-details-header-plus">
                      <img src="images/plus.png" />
                    </span>
                  </h4>

                  <ul className="chat-group-list">
                    <li className="active">
                      <a href="#">
                        <span className="chat-group-list-icon">
                          <img src="images/icon_group.png" />
                        </span>
                        Frontend Discussion
                      </a>
                    </li>

                    <li className="new-message">
                      <a href="#">
                        <span className="chat-group-list-icon">
                          <img src="images/icon_lock.png" />
                        </span>
                        Backend Discussion
                        <span className="message-count">5</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="chat-group-list-icon">
                          <img src="images/icon_group.png" />
                        </span>
                        Official Documents
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="chat-group-list-icon">
                          <img src="images/icon_group.png" />
                        </span>
                        Chitchat Group
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="chat-group-list-icon">
                          <img src="images/icon_lock.png" />
                        </span>
                        Financial Documents
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="chat-right">
                <div className="close-panel">
                  <button className="btn">
                    <img src="images/icon_minimize.png" />
                  </button>
                  <button className="btn">
                    <img src="images/icon_maximize.png" />
                  </button>
                  <button className="btn">
                    <img src="images/icon_close.png" />
                  </button>
                </div>

                <div className="chat-right-header">
                  <div className="chat-right-header-title">
                    <div className="chat-right-avatar">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
                    </div>
                    <div className="chat-right-header-title-text">
                      John Carrey
                      <div className="chat-status">
                        <span className="chat-status-dot chat-status-dot-online"></span>
                        <span className="chat-status-text">Online</span>
                      </div>
                    </div>
                  </div>

                  <ul className="chat-right-header-action">
                    <li>
                      <a href="#">
                        <img src="images/icon_search.png" alt="icon" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="images/icon_call.png" alt="icon" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="images/icon_add_member.png" alt="icon" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="images/icon_info.png" alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="chat-window">
                  <div className="chat-message">
                    <div className="chat-message-name">
                      John Carrey
                      <div className="chat-message-time">
                        <span>10:20pm</span>
                        <span>January 1, 2020</span>
                      </div>
                    </div>

                    <div className="chat-message-text-panel">
                      <div className="chat-message-text">
                        Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads
                        adsfjadlsfj adsfj adslf adsf ads
                      </div>

                      <div className="chat-message-action">
                        <img src="images/icon_3_dots.png" />

                        <ul className="chat-message-action-items">
                          <li>
                            <button className="btn">
                              <img src="images/icon_delete.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_edit_black.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_reply.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_imotics.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_download.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_pin.png" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chat-message chat-message-receiver">
                    <div className="chat-message-name">
                      You
                      <div className="chat-message-time">
                        <span>10:20pm</span>
                        <span>January 1, 2020</span>
                      </div>
                    </div>

                    <div className="chat-message-text-panel">
                      <div className="chat-message-text">
                        Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads
                        adsfjadlsfj adsfj adslf adsf ads
                      </div>

                      <div className="chat-message-action">
                        <img src="images/icon_3_dots.png" />

                        <ul className="chat-message-action-items">
                          <li>
                            <button className="btn">
                              <img src="images/icon_delete.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_edit_black.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_reply.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_imotics.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_download.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_pin.png" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chat-message-date">
                    <span>10 September</span>
                  </div>

                  <div className="chat-message chat-message-receiver">
                    <div className="chat-message-name">
                      You
                      <div className="chat-message-time">
                        <span>10:20pm</span>
                        <span>January 1, 2020</span>
                      </div>
                    </div>

                    <div className="chat-message-text-panel">
                      <div className="chat-message-text">
                        What's up with you?
                      </div>

                      <div className="chat-message-action">
                        <img src="images/icon_3_dots.png" />

                        <ul className="chat-message-action-items">
                          <li>
                            <button className="btn">
                              <img src="images/icon_delete.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_edit_black.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_reply.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_imotics.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_download.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_pin.png" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chat-message chat-message-receiver">
                    <div className="chat-message-name">
                      You
                      <div className="chat-message-time">
                        <span>10:20pm</span>
                        <span>January 1, 2020</span>
                      </div>
                    </div>

                    <div className="chat-message-text-panel">
                      <div className="chat-message-text">
                        This is a sample message to show how does it look.
                      </div>

                      <div className="chat-message-action">
                        <img src="images/icon_3_dots.png" />

                        <ul className="chat-message-action-items">
                          <li>
                            <button className="btn">
                              <img src="images/icon_delete.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_edit_black.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_reply.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_imotics.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_download.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_pin.png" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chat-message-date">
                    <span>Today</span>
                  </div>

                  <div className="chat-message">
                    <div className="chat-message-name">
                      John Carrey
                      <div className="chat-message-time">
                        <span>10:20pm</span>
                        <span>January 1, 2020</span>
                      </div>
                    </div>

                    <div className="chat-message-text-panel">
                      <div className="chat-message-text">Let's meet up.</div>

                      <div className="chat-message-action">
                        <img src="images/icon_3_dots.png" />

                        <ul className="chat-message-action-items">
                          <li>
                            <button className="btn">
                              <img src="images/icon_delete.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_edit_black.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_reply.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_imotics.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_download.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_pin.png" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chat-message">
                    <div className="chat-message-name">
                      John Carrey
                      <div className="chat-message-time">
                        <span>10:20pm</span>
                        <span>January 1, 2020</span>
                      </div>
                    </div>

                    <div className="chat-message-text-panel">
                      <div className="chat-message-text">
                        This is another message.
                      </div>

                      <div className="chat-message-action">
                        <img src="images/icon_3_dots.png" />

                        <ul className="chat-message-action-items">
                          <li>
                            <button className="btn">
                              <img src="images/icon_delete.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_edit_black.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_reply.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_imotics.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_download.png" />
                            </button>
                          </li>
                          <li>
                            <button className="btn">
                              <img src="images/icon_pin.png" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-compose-panel">
                  <div className="chat-compose">
                    <textarea placeholder="Write your message"></textarea>

                    <button className="btn">Send</button>
                  </div>

                  <div className="chat-compose-actions">
                    <ul className="chat-compose-actions-editor">
                      <li>From text editor</li>
                    </ul>

                    <ul className="chat-compose-actions-attachments">
                      <li>
                        <button className="btn">
                          <img src="images/icon_link.png" />
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <img src="images/icon_like.png" />
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <img src="images/icon_photo.png" />
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <img src="images/icon_attach.png" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(StaticScreen);
